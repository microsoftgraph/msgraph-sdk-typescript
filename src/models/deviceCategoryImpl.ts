import {DeviceCategory} from './deviceCategory';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCategoryImpl extends EntityImpl implements DeviceCategory, Parsable {
    /** Optional description for the device category. */
    description?: string | undefined;
    /** Display name for the device category. */
    displayName?: string | undefined;
    /**
     * Instantiates a new deviceCategory and sets the default values.
     * @param deviceCategoryParameterValue 
     */
    public constructor(deviceCategoryParameterValue?: DeviceCategory | undefined) {
        super();
        this.description = deviceCategoryParameterValue?.description ;
        this.displayName = deviceCategoryParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
    };
}
