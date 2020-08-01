import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../store/actions/postActions';
import ReactPaginate from 'react-paginate';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
        
        this.state = {
            offset: 0,
            perPage: 5,
            currentPage: 0
        };

    }

    // componentDidMount
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchPayloads()
    }

    onChange = e => {
        this.props.mappedSearchPost(e.target.value);
    };

    render() {
        //list the posts data
        const postState = this.props.mappedPostState;
        const posts = postState.posts;
        const payloads = postState.payloads;
        const { search, value } = this.props;
        const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage)
        var pageCount = Math.ceil(posts.length / this.state.perPage);
        var slicePayload = payloads.slice(this.state.offset, this.state.offset + this.state.perPage)
        var pageCountPayload = Math.ceil(payloads.length / this.state.perPage);
        return (
            <div className="offset-md-1 col-md-10 postMarginBottom">
                <h4 className="text-center">SpaceX History:</h4>
                <div className="text-center mb-4 mt-4">
                    <div class="form-group">
                        <input className="form-control" placeholder="Search History..." onChange={this.onChange}
                            value={value}
                        />
                    </div>
                </div>
                {!posts && postState.isFetching &&
                    <p>Loading History....</p>
                }
                {posts.length <= 0 && !postState.isFetching &&
                    <h4 className="text-center">No History Available.</h4>
                }
                {posts && posts.length > 0 && !postState.isFetching &&
                    <table className="table booksTable">
                        <thead>
                            <tr>
                                <th className="textCenter">Title</th>
                                <th className="textCenter">Article</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slice.map((post, i) => <tr key={i}>
                                <td>{post.title}</td>
                                <td>{post.links.article}</td>
                            </tr>)

                            }
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </tbody>
                    </table>
                }

                <h4 className="text-center mb-4">SpaceX Address:</h4>

                {!payloads && postState.isFetching &&
                    <p>Loading Address....</p>
                }
                {payloads.length <= 0 && !postState.isFetching &&
                    <h4 className="text-center">No Address Available.</h4>
                }
                {payloads && payloads.length > 0 && !postState.isFetching &&
                    <table className="table booksTable">
                        <thead>
                            <tr>
                                <th className="textCenter">Payload Id</th>
                                <th className="textCenter">Payload Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slicePayload.map((post, i) => <tr key={i}>
                                <td>{post.payload_id}</td>
                                <td>{post.payload_type}</td>
                            </tr>)

                            }
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCountPayload}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </tbody>
                    </table>
                }
            </div>
        );
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
        });

    };

}

// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedPostState: state.postState,
        value: state.value

    }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        fetchPosts: () => dispatch(postActions.fetchPosts()),
        fetchPayloads: () => dispatch(postActions.fetchPayloads()),
        mappedSearchPost: search => dispatch(postActions.searchPost(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
