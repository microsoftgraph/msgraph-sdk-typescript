import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkforceIntegration} from './serializeWorkforceIntegration';
import type {WorkforceIntegration} from './workforceIntegration';
import type {WorkforceIntegrationCollectionResponse} from './workforceIntegrationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkforceIntegrationCollectionResponse(writer: SerializationWriter, workforceIntegrationCollectionResponse: WorkforceIntegrationCollectionResponse | undefined = {} as WorkforceIntegrationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workforceIntegrationCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkforceIntegration>("value", workforceIntegrationCollectionResponse.value, serializeWorkforceIntegration);
}
