
interface Route{
    path: string;
    component: React.ComponentType<Partial<string | JSX.Element>>;

}

export default Route;