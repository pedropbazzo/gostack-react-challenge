const formatDate = (dateD: string): string => {
  return new Date(dateD).toLocaleDateString('pt-br');
};

export default formatDate;
