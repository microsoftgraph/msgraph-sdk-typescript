import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {ExternalGroup} from './externalGroup';
import type {ExternalGroupCollectionResponse} from './externalGroupCollectionResponse';
import {serializeExternalGroup} from './serializeExternalGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalGroupCollectionResponse(writer: SerializationWriter, externalGroupCollectionResponse: ExternalGroupCollectionResponse | undefined = {} as ExternalGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalGroup>("value", externalGroupCollectionResponse.value, serializeExternalGroup);
}
