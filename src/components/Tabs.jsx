export function Tabs(props) {
    const { todos,selectedTab, setSelectedTab} = props;
    const tabs=['All','Active','Completed'];
    return (
        <nav>
            {tabs.map((tab,index) =>{
                const num_of_tasks= todos.filter(todo => {
                    if(tab === 'All'){
                        return true;
                    } else if(tab === 'Active'){
                        return !todo.completed;
                    } else {
                        return todo.completed;
                    }
                }).length;

                return (
                    <button 
                    onClick={() => {setSelectedTab(tab)}}
                     key={index} className={"tab-button "+
                        (tab === selectedTab ? "tab-selected" : "")}
                    > 
                        <h4>{tab} 
                            <span> {num_of_tasks}</span>
                        </h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}