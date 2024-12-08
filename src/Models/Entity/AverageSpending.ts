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
  tableName: "average_spending_day",
  timestamps: true,
})
export class AverageSpendingDay extends Model<AverageSpendingDay> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  average_spending_day_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  average_spending!: number;

  @BelongsTo(() => User)
  user!: User;
}
