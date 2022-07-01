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
export class ExternalItemImpl extends EntityImpl implements ExternalItem {
    /** An array of access control entries. Each entry specifies the access granted to a user or group. Required. */
    private _acl?: Acl[] | undefined;
    /** A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional. */
    private _content?: ExternalItemContent | undefined;
    /** A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required. */
    private _properties?: Properties | undefined;
    /**
     * Gets the acl property value. An array of access control entries. Each entry specifies the access granted to a user or group. Required.
     * @returns a AclInterface
     */
    public get acl() {
        return this._acl;
    };
    /**
     * Sets the acl property value. An array of access control entries. Each entry specifies the access granted to a user or group. Required.
     * @param value Value to set for the acl property.
     */
    public set acl(value: Acl[] | undefined) {
        if(value) {
            const aclArrValue: AclImpl[] = [];
            this.acl?.forEach(element => {
                aclArrValue.push((element instanceof AclImpl? element as AclImpl:new AclImpl(element)));
            });
            this._acl = aclArrValue;
        }
    };
    /**
     * Instantiates a new externalItem and sets the default values.
     * @param externalItemParameterValue 
     */
    public constructor(externalItemParameterValue?: ExternalItem | undefined) {
        super(externalItemParameterValue);
        this._acl = externalItemParameterValue?.acl;
        this._content = externalItemParameterValue?.content;
        this._properties = externalItemParameterValue?.properties;
    };
    /**
     * Gets the content property value. A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional.
     * @returns a ExternalItemContentInterface
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional.
     * @param value Value to set for the content property.
     */
    public set content(value: ExternalItemContent | undefined) {
        if(value) {
            this._content = value instanceof ExternalItemContentImpl? value as ExternalItemContentImpl: new ExternalItemContentImpl(value);
        }
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
     * Gets the properties property value. A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required.
     * @returns a PropertiesInterface
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required.
     * @param value Value to set for the properties property.
     */
    public set properties(value: Properties | undefined) {
        if(value) {
            this._properties = value instanceof PropertiesImpl? value as PropertiesImpl: new PropertiesImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acl && this.acl.length != 0){        const aclArrValue: AclImpl[] = [];
        this.acl?.forEach(element => {
            aclArrValue.push((element instanceof AclImpl? element as AclImpl:new AclImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AclImpl>("acl", aclArrValue);
        }
        if(this.content){
            writer.writeObjectValue<ExternalItemContentImpl>("content", (this.content instanceof ExternalItemContentImpl? this.content as ExternalItemContentImpl: new ExternalItemContentImpl(this.content)));
        }
        if(this.properties){
            writer.writeObjectValue<PropertiesImpl>("properties", (this.properties instanceof PropertiesImpl? this.properties as PropertiesImpl: new PropertiesImpl(this.properties)));
        }
    };
}
