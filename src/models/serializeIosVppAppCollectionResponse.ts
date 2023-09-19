import { type IosVppApp } from './iosVppApp';
import { type IosVppAppCollectionResponse } from './iosVppAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeIosVppApp } from './serializeIosVppApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosVppAppCollectionResponse(writer: SerializationWriter, iosVppAppCollectionResponse: IosVppAppCollectionResponse | undefined = {} as IosVppAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosVppAppCollectionResponse)
        writer.writeCollectionOfObjectValues<IosVppApp>("value", iosVppAppCollectionResponse.value, serializeIosVppApp);
}
