import {Application} from './application';
import {ApplicationCollectionResponse} from './applicationCollectionResponse';
import {createApplicationFromDiscriminatorValue} from './createApplicationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeApplication} from './serializeApplication';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationCollectionResponse(applicationCollectionResponse: ApplicationCollectionResponse | undefined = {} as ApplicationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(applicationCollectionResponse),
        "value": n => { applicationCollectionResponse.value = n.getCollectionOfObjectValues<Application>(createApplicationFromDiscriminatorValue); },
    }
}
