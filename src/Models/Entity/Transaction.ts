import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  Default,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { User } from "./User";

@Table({
  tableName: "transaction",
  timestamps: true,
})
export class Transaction extends Model<Transaction> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  transaction_id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number;

  @BelongsTo(() => User)
  user!: User;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  date_transaction!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  last_modified!: Date;
}
