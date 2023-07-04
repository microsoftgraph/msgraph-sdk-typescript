import {CustomExtensionCallbackConfiguration} from '../customExtensionCallbackConfiguration';
import {serializeCustomCalloutExtension} from '../serializeCustomCalloutExtension';
import {serializeCustomExtensionCallbackConfiguration} from '../serializeCustomExtensionCallbackConfiguration';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {CustomTaskExtension} from './customTaskExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtension(writer: SerializationWriter, customTaskExtension: CustomTaskExtension | undefined = {} as CustomTaskExtension) : void {
        serializeCustomCalloutExtension(writer, customTaskExtension)
        writer.writeObjectValue<CustomExtensionCallbackConfiguration>("callbackConfiguration", customTaskExtension.callbackConfiguration, serializeCustomExtensionCallbackConfiguration);
        writer.writeObjectValue<User>("createdBy", customTaskExtension.createdBy, serializeUser);
        writer.writeDateValue("createdDateTime", customTaskExtension.createdDateTime);
        writer.writeObjectValue<User>("lastModifiedBy", customTaskExtension.lastModifiedBy, serializeUser);
        writer.writeDateValue("lastModifiedDateTime", customTaskExtension.lastModifiedDateTime);
}
