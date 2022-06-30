import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {RootImpl} from './index';
import {Root} from './root';
import {SiteCollection} from './siteCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteCollectionImpl implements SiteCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The geographic region code for where this site collection resides. Read-only. */
    private _dataLocationCode?: string | undefined;
    /** The hostname for the site collection. Read-only. */
    private _hostname?: string | undefined;
    /** If present, indicates that this is a root site collection in SharePoint. Read-only. */
    private _root?: Root | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new siteCollection and sets the default values.
     * @param siteCollectionParameterValue 
     */
    public constructor(siteCollectionParameterValue?: SiteCollection | undefined) {
        this._additionalData = siteCollectionParameterValue?.additionalData ? siteCollectionParameterValue?.additionalData! : {};
        this._dataLocationCode = siteCollectionParameterValue?.dataLocationCode;
        this._hostname = siteCollectionParameterValue?.hostname;
        this._root = siteCollectionParameterValue?.root;
    };
    /**
     * Gets the dataLocationCode property value. The geographic region code for where this site collection resides. Read-only.
     * @returns a string
     */
    public get dataLocationCode() {
        return this._dataLocationCode;
    };
    /**
     * Sets the dataLocationCode property value. The geographic region code for where this site collection resides. Read-only.
     * @param value Value to set for the dataLocationCode property.
     */
    public set dataLocationCode(value: string | undefined) {
        if(value) {
            this._dataLocationCode = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dataLocationCode": n => { this.dataLocationCode = n.getStringValue(); },
            "hostname": n => { this.hostname = n.getStringValue(); },
            "root": n => { this.root = n.getObjectValue<RootImpl>(createRootFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hostname property value. The hostname for the site collection. Read-only.
     * @returns a string
     */
    public get hostname() {
        return this._hostname;
    };
    /**
     * Sets the hostname property value. The hostname for the site collection. Read-only.
     * @param value Value to set for the hostname property.
     */
    public set hostname(value: string | undefined) {
        if(value) {
            this._hostname = value;
        }
    };
    /**
     * Gets the root property value. If present, indicates that this is a root site collection in SharePoint. Read-only.
     * @returns a RootInterface
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If present, indicates that this is a root site collection in SharePoint. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        if(value) {
            this._root = value instanceof RootImpl? value : new RootImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.dataLocationCode){
            writer.writeStringValue("dataLocationCode", this.dataLocationCode);
        }
        if(this.hostname){
            writer.writeStringValue("hostname", this.hostname);
        }
        if(this.root){
            writer.writeObjectValue<RootImpl>("root", (!this.root || this.root instanceof RootImpl? this.root : new RootImpl(this.root)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
