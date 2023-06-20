import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalGroup} from './externalGroup';
import {ExternalGroupCollectionResponse} from './externalGroupCollectionResponse';
import {serializeExternalGroup} from './serializeExternalGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalGroupCollectionResponse(externalGroupCollectionResponse: ExternalGroupCollectionResponse | undefined = {} as ExternalGroupCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalGroup>("value", externalGroupCollectionResponse.value, serializeExternalGroup);
}
