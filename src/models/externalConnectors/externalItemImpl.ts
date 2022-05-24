import {EntityImpl} from '../';
import {Acl} from './acl';
import {createAclFromDiscriminatorValue} from './createAclFromDiscriminatorValue';
import {createExternalItemContentFromDiscriminatorValue} from './createExternalItemContentFromDiscriminatorValue';
import {createPropertiesFromDiscriminatorValue} from './createPropertiesFromDiscriminatorValue';
import {ExternalItem} from './externalItem';
import {ExternalItemContent} from './externalItemContent';
import {AclImpl, ExternalItemContentImpl, PropertiesImpl} from './index';
import {Properties} from './properties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class ExternalItemImpl extends EntityImpl implements ExternalItem, Parsable {
    /** An array of access control entries. Each entry specifies the access granted to a user or group. Required. */
    public acl?: Acl[] | undefined;
    /** A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional. */
    public content?: ExternalItemContent | undefined;
    /** A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required. */
    public properties?: Properties | undefined;
    /**
     * Instantiates a new externalItem and sets the default values.
     * @param externalItemParameterValue 
     */
    public constructor(externalItemParameterValue?: ExternalItem | undefined) {
        super();
        this.acl = externalItemParameterValue?.acl ;
        this.content = externalItemParameterValue?.content ;
        this.properties = externalItemParameterValue?.properties ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acl": n => { this.acl = n.getCollectionOfObjectValues<AclImpl>(createAclFromDiscriminatorValue); },
            "content": n => { this.content = n.getObjectValue<ExternalItemContentImpl>(createExternalItemContentFromDiscriminatorValue); },
            "properties": n => { this.properties = n.getObjectValue<PropertiesImpl>(createPropertiesFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acl && this.acl.length != 0){        const aclArrValue: AclImpl[] = []; this.acl?.forEach(element => {aclArrValue.push(new AclImpl(element));});
        writer.writeCollectionOfObjectValues<AclImpl>("acl", aclArrValue);
        }
        if(this.content){
        writer.writeObjectValue<ExternalItemContentImpl>("content", new ExternalItemContentImpl(this.content));
        }
        if(this.properties){
        writer.writeObjectValue<PropertiesImpl>("properties", new PropertiesImpl(this.properties));
        }
    };
}
