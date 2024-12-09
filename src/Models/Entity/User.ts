import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
} from "sequelize-typescript";

interface UserAttributes {
  user_id: string;
  email: string;
  password_hash: string;
}

interface UserCreateAttributes extends Optional<UserAttributes, "user_id"> {}

@Table({
  tableName: "user",
  timestamps: false,
})
export class User extends Model<UserAttributes, UserCreateAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: true,
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
