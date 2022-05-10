import {RiskUserActivityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskUserActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskUserActivityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskUserActivityImpl();
}
