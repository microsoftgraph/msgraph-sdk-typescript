import {MacOSOfficeSuiteApp} from './macOSOfficeSuiteApp';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSOfficeSuiteApp(macOSOfficeSuiteApp: MacOSOfficeSuiteApp | undefined = {} as MacOSOfficeSuiteApp, writer: SerializationWriter) : void {
        serializeMobileApp(writer, macOSOfficeSuiteApp)
}
