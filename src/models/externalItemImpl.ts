import {AclImpl, ExternalItemContentImpl, PropertiesImpl} from './externalConnectors/';
import {Acl} from './externalConnectors/acl';
import {createAclFromDiscriminatorValue} from './externalConnectors/createAclFromDiscriminatorValue';
import {createExternalItemContentFromDiscriminatorValue} from './externalConnectors/createExternalItemContentFromDiscriminatorValue';
import {createPropertiesFromDiscriminatorValue} from './externalConnectors/createPropertiesFromDiscriminatorValue';
import {ExternalItemContent} from './externalConnectors/externalItemContent';
import {Properties} from './externalConnectors/properties';
import {ExternalItem} from './externalItem';
import {EntityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItemImpl extends EntityImpl implements ExternalItem {
    /** An array of access control entries. Each entry specifies the access granted to a user or group. Required. */
    public acl?: Acl[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional. */
    public content?: ExternalItemContent | undefined;
    /** A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required. */
    public properties?: Properties | undefined;
    /**
     * Instantiates a new ExternalItem and sets the default values.
     * @param externalItemParameterValue 
     */
    public constructor(externalItemParameterValue?: ExternalItem | undefined) {
        super(externalItemParameterValue);
        const aclArrValue: AclImpl[] = []; externalItemParameterValue.acl?.forEach(element => {aclArrValue.push(element instanceof AclImpl? element : new AclImpl(element));});
        this.acl = aclArrValue;
        this.additionalData = externalItemParameterValue?.additionalData ? externalItemParameterValue?.additionalData! : {};
        this.content = externalItemParameterValue?.content instanceof ExternalItemContentImpl? externalItemParameterValue?.content:new ExternalItemContentImpl(externalItemParameterValue?.content);
        this.properties = externalItemParameterValue?.properties instanceof PropertiesImpl? externalItemParameterValue?.properties:new PropertiesImpl(externalItemParameterValue?.properties);
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
        if(this.acl && this.acl.length != 0){        const aclArrValue: AclImpl[] = []; this.acl?.forEach(element => {aclArrValue.push(element instanceof AclImpl? element : new AclImpl(element));});
            writer.writeCollectionOfObjectValues<AclImpl>("acl", aclArrValue);
        }
        if(this.content){
            writer.writeObjectValue<ExternalItemContentImpl>("content", new ExternalItemContentImpl(this.content));
        }
        if(this.properties){
            writer.writeObjectValue<PropertiesImpl>("properties", new PropertiesImpl(this.properties));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
