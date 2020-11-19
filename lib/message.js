const messages = [
  "Conquiste seus medos ou deixe eles te conquistarem",
  "Rios precisam de primaveras",
  "Não tenha medo do que você não saiba",
  "Você terá uma gostosa surpresa",
  "Nada é impossível, seja simples",
];

exports.getMessages = () => {
  const idx = Math.floor(Math.random() * messages.length);
  return messages[idx];
};
