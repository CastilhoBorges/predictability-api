import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
} from "sequelize-typescript";

@Table({
  tableName: "user",
  timestamps: false,
})
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password_hash!: string;
}
