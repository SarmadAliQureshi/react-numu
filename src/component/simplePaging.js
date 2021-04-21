const  simplePaging = ()=> {
    return <div>
     {this.state.currentPage > 1 ?
      <button onClick={() => this.changePage('back')}>{strings.back}</button>
     : null}
     {this.state.data.length -1 > this.state.currentPage * this.state.maxItemsPerPage ?
      <button onClick={() => this.changePage('next')}>{strings.next}</button>
     : null}
    </div>;
   }

   export default simplePaging