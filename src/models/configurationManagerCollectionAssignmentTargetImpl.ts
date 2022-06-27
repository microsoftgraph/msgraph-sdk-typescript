import {ConfigurationManagerCollectionAssignmentTarget} from './configurationManagerCollectionAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConfigurationManagerCollectionAssignmentTargetImpl extends DeviceAndAppManagementAssignmentTargetImpl implements ConfigurationManagerCollectionAssignmentTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The collection Id that is the target of the assignment. */
    public collectionId?: string | undefined;
    /**
     * Instantiates a new ConfigurationManagerCollectionAssignmentTarget and sets the default values.
     * @param configurationManagerCollectionAssignmentTargetParameterValue 
     */
    public constructor(configurationManagerCollectionAssignmentTargetParameterValue?: ConfigurationManagerCollectionAssignmentTarget | undefined) {
        super(configurationManagerCollectionAssignmentTargetParameterValue);
        this.additionalData = configurationManagerCollectionAssignmentTargetParameterValue?.additionalData ? configurationManagerCollectionAssignmentTargetParameterValue?.additionalData! : {};
        this.collectionId = configurationManagerCollectionAssignmentTargetParameterValue?.collectionId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "collectionId": n => { this.collectionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.collectionId){
            writer.writeStringValue("collectionId", this.collectionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
