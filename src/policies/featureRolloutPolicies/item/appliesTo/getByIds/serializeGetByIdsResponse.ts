import {DirectoryObject} from '../../../../../models/directoryObject';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryObject} from '../../../../../models/serializeDirectoryObject';
import {GetByIdsResponse} from './getByIdsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetByIdsResponse(getByIdsResponse: GetByIdsResponse | undefined = {} as GetByIdsResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getByIdsResponse)
        writer.writeCollectionOfObjectValues<DirectoryObject>("value", getByIdsResponse.value, serializeDirectoryObject);
}
