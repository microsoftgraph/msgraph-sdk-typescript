import type {ApplicationTemplate} from './applicationTemplate';
import type {ApplicationTemplateCollectionResponse} from './applicationTemplateCollectionResponse';
import {createApplicationTemplateFromDiscriminatorValue} from './createApplicationTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeApplicationTemplate} from './serializeApplicationTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationTemplateCollectionResponse(applicationTemplateCollectionResponse: ApplicationTemplateCollectionResponse | undefined = {} as ApplicationTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(applicationTemplateCollectionResponse),
        "value": n => { applicationTemplateCollectionResponse.value = n.getCollectionOfObjectValues<ApplicationTemplate>(createApplicationTemplateFromDiscriminatorValue); },
    }
}
