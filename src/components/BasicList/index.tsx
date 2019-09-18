import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Basic } from "../../store/ducks/basics/types";
import { ApplicationState } from "../../store";
import * as BasicsActions from "../../store/ducks/basics/actions";

/**
 * Mapea os tipos das informações vindas através do 'mapStateToProps'
 */
interface StateProps {
  basics: Basic[];
}

/**
 * Mapea as funções vindas do dispatch props do redux
 */
interface DispatchProps {
  loadRequest(): void;
  // loadSuccess(data: Basic[]);
}

/**
 * Mapea qualquer propriedade vinda um component pai
 */
// interface OwnProps {}

/**
 * Unimos todas as interfaces em uma só para passarmos ao component
 */
type Props = StateProps & DispatchProps; //& OwnProps;

class BasicList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { basics } = this.props;

    return (
      <div>
        <li>{basics.map(basic => basic.name)}</li>
      </div>
    );
  }
}

const mapStateToProps = ({ basics }: ApplicationState) => ({
  basics: basics
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(BasicsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicList);
