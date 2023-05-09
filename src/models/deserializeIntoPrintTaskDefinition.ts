import {AppIdentity} from './appIdentity';
import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PrintTask} from './printTask';
import {PrintTaskDefinition} from './printTaskDefinition';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializePrintTask} from './serializePrintTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskDefinition(printTaskDefinition: PrintTaskDefinition | undefined = {} as PrintTaskDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printTaskDefinition),
        "createdBy": n => { printTaskDefinition.createdBy = n.getObjectValue<AppIdentity>(createAppIdentityFromDiscriminatorValue); },
        "displayName": n => { printTaskDefinition.displayName = n.getStringValue(); },
        "tasks": n => { printTaskDefinition.tasks = n.getCollectionOfObjectValues<PrintTask>(createPrintTaskFromDiscriminatorValue); },
    }
}
