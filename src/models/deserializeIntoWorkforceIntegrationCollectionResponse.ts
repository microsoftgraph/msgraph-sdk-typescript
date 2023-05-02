import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import {WorkforceIntegration} from './workforceIntegration';
import {WorkforceIntegrationCollectionResponse} from './workforceIntegrationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegrationCollectionResponse(workforceIntegrationCollectionResponse: WorkforceIntegrationCollectionResponse | undefined = {} as WorkforceIntegrationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workforceIntegrationCollectionResponse),
        "value": n => { workforceIntegrationCollectionResponse.value = n.getCollectionOfObjectValues<WorkforceIntegration>(createWorkforceIntegrationFromDiscriminatorValue); },
    }
}
