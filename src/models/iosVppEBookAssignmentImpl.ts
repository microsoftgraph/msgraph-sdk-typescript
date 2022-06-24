import {ManagedEBookAssignmentImpl} from './index';
import {IosVppEBookAssignment} from './iosVppEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppEBookAssignmentImpl extends ManagedEBookAssignmentImpl implements IosVppEBookAssignment {
    /**
     * Instantiates a new IosVppEBookAssignment and sets the default values.
     * @param iosVppEBookAssignmentParameterValue 
     */
    public constructor(iosVppEBookAssignmentParameterValue?: IosVppEBookAssignment | undefined) {
        super(iosVppEBookAssignmentParameterValue);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
