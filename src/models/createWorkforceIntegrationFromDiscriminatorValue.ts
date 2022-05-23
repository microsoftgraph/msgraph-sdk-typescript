import {WorkforceIntegrationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkforceIntegrationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkforceIntegrationImpl();
}
