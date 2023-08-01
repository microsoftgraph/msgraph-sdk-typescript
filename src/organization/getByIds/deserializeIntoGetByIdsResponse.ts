import {createDirectoryObjectFromDiscriminatorValue} from '../../models/createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {DirectoryObject} from '../../models/directoryObject';
import {serializeDirectoryObject} from '../../models/serializeDirectoryObject';
import type {GetByIdsResponse} from './getByIdsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetByIdsResponse(getByIdsResponse: GetByIdsResponse | undefined = {} as GetByIdsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getByIdsResponse),
        "value": n => { getByIdsResponse.value = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
