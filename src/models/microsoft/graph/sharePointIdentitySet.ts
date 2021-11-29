import {Identity} from './identity';
import {IdentitySet} from './identitySet';
import {SharePointIdentity} from './sharePointIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharePointIdentitySet extends IdentitySet implements Parsable {
    private _group?: Identity | undefined;
    private _siteGroup?: SharePointIdentity | undefined;
    private _siteUser?: SharePointIdentity | undefined;
    /**
     * Instantiates a new sharePointIdentitySet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the group property value. 
     * @returns a identity
     */
    public get group() {
        return this._group;
    };
    /**
     * Gets the siteGroup property value. 
     * @returns a sharePointIdentity
     */
    public get siteGroup() {
        return this._siteGroup;
    };
    /**
     * Gets the siteUser property value. 
     * @returns a sharePointIdentity
     */
    public get siteUser() {
        return this._siteUser;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["group", (o, n) => { (o as unknown as SharePointIdentitySet).group = n.getObjectValue<Identity>(Identity); }],
            ["siteGroup", (o, n) => { (o as unknown as SharePointIdentitySet).siteGroup = n.getObjectValue<SharePointIdentity>(SharePointIdentity); }],
            ["siteUser", (o, n) => { (o as unknown as SharePointIdentitySet).siteUser = n.getObjectValue<SharePointIdentity>(SharePointIdentity); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Identity>("group", this.group);
        writer.writeObjectValue<SharePointIdentity>("siteGroup", this.siteGroup);
        writer.writeObjectValue<SharePointIdentity>("siteUser", this.siteUser);
    };
    /**
     * Sets the group property value. 
     * @param value Value to set for the group property.
     */
    public set group(value: Identity | undefined) {
        this._group = value;
    };
    /**
     * Sets the siteGroup property value. 
     * @param value Value to set for the siteGroup property.
     */
    public set siteGroup(value: SharePointIdentity | undefined) {
        this._siteGroup = value;
    };
    /**
     * Sets the siteUser property value. 
     * @param value Value to set for the siteUser property.
     */
    public set siteUser(value: SharePointIdentity | undefined) {
        this._siteUser = value;
    };
}
