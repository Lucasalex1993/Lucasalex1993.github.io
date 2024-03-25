from pessoa import Pessoa
#Exemplo estanciada a classe
p1 = Pessoa('Carlos ', 36)
#print(p1)
print(p1.nome, p1.idade)
p1.get_ano_nascimento()
#Não necessita estanciar por causa do @classmethod
p2 = Pessoa.por_ano_nascimento('Carlos', 1983)
#print(p2)
print(p2.nome, p2.idade)
p2.get_ano_nascimento()


