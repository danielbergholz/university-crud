import { Request, Response } from 'express'
import Class from '../models/Class'

interface ICreateClass {
  nome: string
  professor: string
  departamento: string
  codigo: number
  qtdCreditos: number
}

class ClassController {
  // LISTAR disciplinas
  async index(_: unknown, res: Response) {
    try {
      const classes = await Class.find()
      return res.status(200).json(classes)
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` })
    }
  }

  // CRIAR disciplinas
  async store(req: Request, res: Response) {
    const {
      codigo,
      nome,
      professor,
      departamento,
      qtdCreditos,
    }: ICreateClass = req.body

    if (!codigo || !nome || !professor || !departamento || !qtdCreditos) {
      return res
        .status(422)
        .json({ message: 'Estão faltando informações no corpo da requisição!' })
    }

    const classAlreadyExists = await Class.findOne({ codigo })

    if (classAlreadyExists) {
      return res
        .status(400)
        .json({ message: `A disciplina de código ${codigo} ja existe` })
    }

    try {
      const newClass = await Class.create(req.body)
      return res.status(201).json(newClass)
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` })
    }
  }

  // ATUALIZAR disciplinas
  async update(req: Request, res: Response) {
    const {
      codigo,
      nome,
      professor,
      departamento,
      qtdCreditos,
    }: ICreateClass = req.body

    const { id } = req.params

    const classToUpdate = await Class.findOne({
      id,
    })

    if (!classToUpdate) {
      return res
        .status(422)
        .json({ message: 'Disciplina não existe, ID inválido' })
    }

    if (!codigo && !nome && !professor && !departamento && !qtdCreditos) {
      return res
        .status(422)
        .json({ message: 'Estão faltando informações no corpo da requisição!' })
    }

    await Class.updateOne(req.body)

    return res
      .status(200)
      .json({ message: 'Disciplina atualizado com sucesso!' })
  }

  // DELETAR disciplina
  async delete(req: Request, res: Response) {
    const { id } = req.params

    const classToDelete = await Class.findOne({ id })

    if (!classToDelete) {
      return res
        .status(422)
        .json({ message: 'Disciplina não existe, ID inválido' })
    }

    await Class.deleteOne({ id: req.params.id })

    return res.json({ message: 'A Disciplina foi excluída!' })
  }
}

export default new ClassController()
