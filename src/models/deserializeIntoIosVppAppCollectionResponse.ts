import { createIosVppAppFromDiscriminatorValue } from './createIosVppAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IosVppApp } from './iosVppApp';
import { type IosVppAppCollectionResponse } from './iosVppAppCollectionResponse';
import { serializeIosVppApp } from './serializeIosVppApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppAppCollectionResponse(iosVppAppCollectionResponse: IosVppAppCollectionResponse | undefined = {} as IosVppAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosVppAppCollectionResponse),
        "value": n => { iosVppAppCollectionResponse.value = n.getCollectionOfObjectValues<IosVppApp>(createIosVppAppFromDiscriminatorValue); },
    }
}
