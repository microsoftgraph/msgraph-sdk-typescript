import {IdentityCustomUserFlowAttributeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityCustomUserFlowAttributeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityCustomUserFlowAttributeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityCustomUserFlowAttributeCollectionResponse();
}
