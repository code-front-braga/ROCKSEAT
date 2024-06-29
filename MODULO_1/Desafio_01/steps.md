# Passo-a-passo do projeto To do list

### Criação de Componentes:
> Foram criados os seguintes componentes:
1. Button: Botão para enviar as tarefas;
2. Input: Onde será digitado as tarefas;
3. Header: Header do projeto em sim;

> Componentes para criação da lista:
1. Empty: Quando não tiver nenhuma tarefa adicionada, o componente 'Empty' fica visível;
2. Header: Header da lista;
3. Item: Componente de criação/estilização de tarefas;

### Uso do children:
> O uso do children permite que manipulemos e transformemos o JSX recebido como propriedade;
>
>> export function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}

### useState + typescript em uma lista de tarefas:
> export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}
> const [tasks, setTasks] = useState<ITask[]>([]);