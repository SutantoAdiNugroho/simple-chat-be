module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'questions',
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    },
    { timestamps: true },
    {
      hooks: {
        afterCreate: (record) => {
          delete record.dataValues.questionId;
        },
      },
    }
  );

  return User;
};
