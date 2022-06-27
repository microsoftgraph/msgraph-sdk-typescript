import {SubjectSetImpl} from './index';
import {RequestorManager} from './requestorManager';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequestorManagerImpl extends SubjectSetImpl implements RequestorManager {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The hierarchical level of the manager with respect to the requestor. For example, the direct manager of a requestor would have a managerLevel of 1, while the manager of the requestor's manager would have a managerLevel of 2. Default value for managerLevel is 1. Possible values for this property range from 1 to 2. */
    public managerLevel?: number | undefined;
    /**
     * Instantiates a new RequestorManager and sets the default values.
     * @param requestorManagerParameterValue 
     */
    public constructor(requestorManagerParameterValue?: RequestorManager | undefined) {
        super(requestorManagerParameterValue);
        this.additionalData = requestorManagerParameterValue?.additionalData ? requestorManagerParameterValue?.additionalData! : {};
        this.managerLevel = requestorManagerParameterValue?.managerLevel;
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
