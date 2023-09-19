import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsWebApp } from './serializeWindowsWebApp';
import { type WindowsWebApp } from './windowsWebApp';
import { type WindowsWebAppCollectionResponse } from './windowsWebAppCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsWebAppCollectionResponse(writer: SerializationWriter, windowsWebAppCollectionResponse: WindowsWebAppCollectionResponse | undefined = {} as WindowsWebAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsWebAppCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsWebApp>("value", windowsWebAppCollectionResponse.value, serializeWindowsWebApp);
}
