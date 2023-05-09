import {deserializeIntoManagedEBookAssignment} from './deserializeIntoManagedEBookAssignment';
import {IosVppEBookAssignment} from './iosVppEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppEBookAssignment(iosVppEBookAssignment: IosVppEBookAssignment | undefined = {} as IosVppEBookAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedEBookAssignment(iosVppEBookAssignment),
    }
}
