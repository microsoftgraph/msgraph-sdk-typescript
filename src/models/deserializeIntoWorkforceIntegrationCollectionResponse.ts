import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import type {WorkforceIntegration} from './workforceIntegration';
import type {WorkforceIntegrationCollectionResponse} from './workforceIntegrationCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegrationCollectionResponse(workforceIntegrationCollectionResponse: WorkforceIntegrationCollectionResponse | undefined = {} as WorkforceIntegrationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workforceIntegrationCollectionResponse),
        "value": n => { workforceIntegrationCollectionResponse.value = n.getCollectionOfObjectValues<WorkforceIntegration>(createWorkforceIntegrationFromDiscriminatorValue); },
    }
}
