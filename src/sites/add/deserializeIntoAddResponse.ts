import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {AddResponse} from './addResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddResponse(addResponse: AddResponse | undefined = {} as AddResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addResponse),
        "value": n => { addResponse.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
