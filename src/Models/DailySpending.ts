import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  Default,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./User.js"; 

@Table({
  tableName: "daily_spending",
  timestamps: false, 
})
export class DailySpending extends Model<DailySpending> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  daily_spending_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date; // Dia específico do gasto

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number; // Valor do gasto no dia específico

  @BelongsTo(() => User)
  user!: User; // Relacionamento com o modelo User
}
