import {RiskServicePrincipalActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskServicePrincipalActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskServicePrincipalActivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskServicePrincipalActivity();
}
