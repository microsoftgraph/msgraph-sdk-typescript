import {SubjectSetImpl} from './index';
import {TargetManager} from './targetManager';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetManagerImpl extends SubjectSetImpl implements TargetManager {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Manager level, between 1 and 4. The direct manager is 1. */
    public managerLevel?: number | undefined;
    /**
     * Instantiates a new TargetManager and sets the default values.
     * @param targetManagerParameterValue 
     */
    public constructor(targetManagerParameterValue?: TargetManager | undefined) {
        super(targetManagerParameterValue);
        this.additionalData = targetManagerParameterValue?.additionalData ? targetManagerParameterValue?.additionalData! : {};
        this.managerLevel = targetManagerParameterValue?.managerLevel;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "managerLevel": n => { this.managerLevel = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.managerLevel){
            writer.writeNumberValue("managerLevel", this.managerLevel);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
