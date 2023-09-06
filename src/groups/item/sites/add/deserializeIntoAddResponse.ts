import { createSiteFromDiscriminatorValue } from '../../../../models/createSiteFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSite } from '../../../../models/serializeSite';
import { type Site } from '../../../../models/site';
import { type AddResponse } from './addResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddResponse(addResponse: AddResponse | undefined = {} as AddResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addResponse),
        "value": n => { addResponse.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
