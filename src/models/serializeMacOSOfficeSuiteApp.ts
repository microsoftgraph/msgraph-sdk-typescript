import type {MacOSOfficeSuiteApp} from './macOSOfficeSuiteApp';
import {serializeMobileApp} from './serializeMobileApp';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSOfficeSuiteApp(writer: SerializationWriter, macOSOfficeSuiteApp: MacOSOfficeSuiteApp | undefined = {} as MacOSOfficeSuiteApp) : void {
        serializeMobileApp(writer, macOSOfficeSuiteApp)
}
