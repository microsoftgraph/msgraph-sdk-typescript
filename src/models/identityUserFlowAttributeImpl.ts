import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityUserFlowAttributeImpl extends EntityImpl implements IdentityUserFlowAttribute, Parsable {
    /** The data type of the user flow attribute. This cannot be modified after the custom user flow attribute is created. The supported values for dataType are: string , boolean , int64 , stringCollection , dateTime. */
    public dataType?: IdentityUserFlowAttributeDataType | undefined;
    /** The description of the user flow attribute that's shown to the user at the time of sign-up. */
    public description?: string | undefined;
    /** The display name of the user flow attribute. */
    public displayName?: string | undefined;
    /** The type of the user flow attribute. This is a read-only attribute that is automatically set. Depending on the type of attribute, the values for this property will be builtIn, custom, or required. */
    public userFlowAttributeType?: IdentityUserFlowAttributeType | undefined;
    /**
     * Instantiates a new identityUserFlowAttribute and sets the default values.
     * @param identityUserFlowAttributeParameterValue 
     */
    public constructor(identityUserFlowAttributeParameterValue?: IdentityUserFlowAttribute | undefined) {
        super();
        this.dataType = identityUserFlowAttributeParameterValue?.dataType ;
        this.description = identityUserFlowAttributeParameterValue?.description ;
        this.displayName = identityUserFlowAttributeParameterValue?.displayName ;
        this.userFlowAttributeType = identityUserFlowAttributeParameterValue?.userFlowAttributeType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "dataType": n => { this.dataType = n.getEnumValue<IdentityUserFlowAttributeDataType>(IdentityUserFlowAttributeDataType); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "userFlowAttributeType": n => { this.userFlowAttributeType = n.getEnumValue<IdentityUserFlowAttributeType>(IdentityUserFlowAttributeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.dataType){
        writer.writeEnumValue<IdentityUserFlowAttributeDataType>("dataType", this.dataType);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.userFlowAttributeType){
        writer.writeEnumValue<IdentityUserFlowAttributeType>("userFlowAttributeType", this.userFlowAttributeType);
        }
    };
}
