import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {RootImpl} from './index';
import {Root} from './root';
import {SiteCollection} from './siteCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteCollectionImpl implements AdditionalDataHolder, Parsable, SiteCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The geographic region code for where this site collection resides. Read-only. */
    public dataLocationCode?: string | undefined;
    /** The hostname for the site collection. Read-only. */
    public hostname?: string | undefined;
    /** If present, indicates that this is a root site collection in SharePoint. Read-only. */
    public root?: Root | undefined;
    /**
     * Instantiates a new siteCollection and sets the default values.
     * @param siteCollectionParameterValue 
     */
    public constructor(siteCollectionParameterValue?: SiteCollection | undefined) {
        this.additionalData = siteCollectionParameterValue?.additionalData ? siteCollectionParameterValue?.additionalData! : {}
        this.dataLocationCode = siteCollectionParameterValue?.dataLocationCode ;
        this.hostname = siteCollectionParameterValue?.hostname ;
        this.root = siteCollectionParameterValue?.root ;
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
        writer.writeObjectValue<RootImpl>("root", new RootImpl(this.root));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
