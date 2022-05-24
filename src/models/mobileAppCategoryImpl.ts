import {EntityImpl} from './index';
import {MobileAppCategory} from './mobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for a single Intune app category. */
export class MobileAppCategoryImpl extends EntityImpl implements MobileAppCategory, Parsable {
    /** The name of the app category. */
    public displayName?: string | undefined;
    /** The date and time the mobileAppCategory was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new mobileAppCategory and sets the default values.
     * @param mobileAppCategoryParameterValue 
     */
    public constructor(mobileAppCategoryParameterValue?: MobileAppCategory | undefined) {
        super();
        this.displayName = mobileAppCategoryParameterValue?.displayName ;
        this.lastModifiedDateTime = mobileAppCategoryParameterValue?.lastModifiedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
    };
}
