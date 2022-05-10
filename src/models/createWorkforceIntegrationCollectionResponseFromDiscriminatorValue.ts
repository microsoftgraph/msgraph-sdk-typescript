import {WorkforceIntegrationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkforceIntegrationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkforceIntegrationCollectionResponseImpl();
}
