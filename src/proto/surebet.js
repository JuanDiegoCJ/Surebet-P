/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const surebet = $root.surebet = (() => {

    /**
     * Namespace surebet.
     * @exports surebet
     * @namespace
     */
    const surebet = {};

    surebet.SurebetItem = (function() {

        /**
         * Properties of a SurebetItem.
         * @memberof surebet
         * @interface ISurebetItem
         * @property {string|null} [typesurebet] SurebetItem typesurebet
         * @property {string|null} [arbprofit] SurebetItem arbprofit
         * @property {string|null} [middle] SurebetItem middle
         * @property {string|null} [sportname] SurebetItem sportname
         * @property {string|null} [fulltime] SurebetItem fulltime
         * @property {string|null} [arbgenerationtime] SurebetItem arbgenerationtime
         * @property {string|null} [bookmaker] SurebetItem bookmaker
         * @property {string|null} [currentscore] SurebetItem currentscore
         * @property {string|null} [eventname] SurebetItem eventname
         * @property {string|null} [eventstarttime] SurebetItem eventstarttime
         * @property {string|null} [leaguename] SurebetItem leaguename
         * @property {string|null} [arboutcome] SurebetItem arboutcome
         * @property {string|null} [directionodd] SurebetItem directionodd
         * @property {string|null} [odd] SurebetItem odd
         * @property {string|null} [gamescore] SurebetItem gamescore
         * @property {string|null} [currencyodd] SurebetItem currencyodd
         * @property {string|null} [created] SurebetItem created
         * @property {string|null} [createddate] SurebetItem createddate
         * @property {string|null} [arbid] SurebetItem arbid
         * @property {string|null} [eventid] SurebetItem eventid
         * @property {string|null} [section] SurebetItem section
         * @property {string|null} [color] SurebetItem color
         * @property {string|null} [wrongitem] SurebetItem wrongitem
         * @property {string|null} [clon] SurebetItem clon
         * @property {string|null} [origen] SurebetItem origen
         * @property {string|null} [tipo] SurebetItem tipo
         * @property {string|null} [link] SurebetItem link
         * @property {string|null} [funds] SurebetItem funds
         */

        /**
         * Constructs a new SurebetItem.
         * @memberof surebet
         * @classdesc Represents a SurebetItem.
         * @implements ISurebetItem
         * @constructor
         * @param {surebet.ISurebetItem=} [properties] Properties to set
         */
        function SurebetItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SurebetItem typesurebet.
         * @member {string} typesurebet
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.typesurebet = "";

        /**
         * SurebetItem arbprofit.
         * @member {string} arbprofit
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.arbprofit = "";

        /**
         * SurebetItem middle.
         * @member {string} middle
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.middle = "";

        /**
         * SurebetItem sportname.
         * @member {string} sportname
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.sportname = "";

        /**
         * SurebetItem fulltime.
         * @member {string} fulltime
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.fulltime = "";

        /**
         * SurebetItem arbgenerationtime.
         * @member {string} arbgenerationtime
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.arbgenerationtime = "";

        /**
         * SurebetItem bookmaker.
         * @member {string} bookmaker
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.bookmaker = "";

        /**
         * SurebetItem currentscore.
         * @member {string} currentscore
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.currentscore = "";

        /**
         * SurebetItem eventname.
         * @member {string} eventname
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.eventname = "";

        /**
         * SurebetItem eventstarttime.
         * @member {string} eventstarttime
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.eventstarttime = "";

        /**
         * SurebetItem leaguename.
         * @member {string} leaguename
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.leaguename = "";

        /**
         * SurebetItem arboutcome.
         * @member {string} arboutcome
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.arboutcome = "";

        /**
         * SurebetItem directionodd.
         * @member {string} directionodd
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.directionodd = "";

        /**
         * SurebetItem odd.
         * @member {string} odd
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.odd = "";

        /**
         * SurebetItem gamescore.
         * @member {string} gamescore
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.gamescore = "";

        /**
         * SurebetItem currencyodd.
         * @member {string} currencyodd
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.currencyodd = "";

        /**
         * SurebetItem created.
         * @member {string} created
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.created = "";

        /**
         * SurebetItem createddate.
         * @member {string} createddate
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.createddate = "";

        /**
         * SurebetItem arbid.
         * @member {string} arbid
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.arbid = "";

        /**
         * SurebetItem eventid.
         * @member {string} eventid
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.eventid = "";

        /**
         * SurebetItem section.
         * @member {string} section
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.section = "";

        /**
         * SurebetItem color.
         * @member {string} color
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.color = "";

        /**
         * SurebetItem wrongitem.
         * @member {string} wrongitem
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.wrongitem = "";

        /**
         * SurebetItem clon.
         * @member {string} clon
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.clon = "";

        /**
         * SurebetItem origen.
         * @member {string} origen
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.origen = "";

        /**
         * SurebetItem tipo.
         * @member {string} tipo
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.tipo = "";

        /**
         * SurebetItem link.
         * @member {string} link
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.link = "";

        /**
         * SurebetItem funds.
         * @member {string} funds
         * @memberof surebet.SurebetItem
         * @instance
         */
        SurebetItem.prototype.funds = "";

        /**
         * Creates a new SurebetItem instance using the specified properties.
         * @function create
         * @memberof surebet.SurebetItem
         * @static
         * @param {surebet.ISurebetItem=} [properties] Properties to set
         * @returns {surebet.SurebetItem} SurebetItem instance
         */
        SurebetItem.create = function create(properties) {
            return new SurebetItem(properties);
        };

        /**
         * Encodes the specified SurebetItem message. Does not implicitly {@link surebet.SurebetItem.verify|verify} messages.
         * @function encode
         * @memberof surebet.SurebetItem
         * @static
         * @param {surebet.ISurebetItem} message SurebetItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SurebetItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.typesurebet != null && Object.hasOwnProperty.call(message, "typesurebet"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.typesurebet);
            if (message.arbprofit != null && Object.hasOwnProperty.call(message, "arbprofit"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.arbprofit);
            if (message.middle != null && Object.hasOwnProperty.call(message, "middle"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.middle);
            if (message.sportname != null && Object.hasOwnProperty.call(message, "sportname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sportname);
            if (message.fulltime != null && Object.hasOwnProperty.call(message, "fulltime"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.fulltime);
            if (message.arbgenerationtime != null && Object.hasOwnProperty.call(message, "arbgenerationtime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.arbgenerationtime);
            if (message.bookmaker != null && Object.hasOwnProperty.call(message, "bookmaker"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.bookmaker);
            if (message.currentscore != null && Object.hasOwnProperty.call(message, "currentscore"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.currentscore);
            if (message.eventname != null && Object.hasOwnProperty.call(message, "eventname"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.eventname);
            if (message.eventstarttime != null && Object.hasOwnProperty.call(message, "eventstarttime"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.eventstarttime);
            if (message.leaguename != null && Object.hasOwnProperty.call(message, "leaguename"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.leaguename);
            if (message.arboutcome != null && Object.hasOwnProperty.call(message, "arboutcome"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.arboutcome);
            if (message.directionodd != null && Object.hasOwnProperty.call(message, "directionodd"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.directionodd);
            if (message.odd != null && Object.hasOwnProperty.call(message, "odd"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.odd);
            if (message.gamescore != null && Object.hasOwnProperty.call(message, "gamescore"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.gamescore);
            if (message.currencyodd != null && Object.hasOwnProperty.call(message, "currencyodd"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.currencyodd);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.created);
            if (message.createddate != null && Object.hasOwnProperty.call(message, "createddate"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.createddate);
            if (message.arbid != null && Object.hasOwnProperty.call(message, "arbid"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.arbid);
            if (message.eventid != null && Object.hasOwnProperty.call(message, "eventid"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.eventid);
            if (message.section != null && Object.hasOwnProperty.call(message, "section"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.section);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.color);
            if (message.wrongitem != null && Object.hasOwnProperty.call(message, "wrongitem"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.wrongitem);
            if (message.clon != null && Object.hasOwnProperty.call(message, "clon"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.clon);
            if (message.origen != null && Object.hasOwnProperty.call(message, "origen"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.origen);
            if (message.tipo != null && Object.hasOwnProperty.call(message, "tipo"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.tipo);
            if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.link);
            if (message.funds != null && Object.hasOwnProperty.call(message, "funds"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.funds);
            return writer;
        };

        /**
         * Encodes the specified SurebetItem message, length delimited. Does not implicitly {@link surebet.SurebetItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof surebet.SurebetItem
         * @static
         * @param {surebet.ISurebetItem} message SurebetItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SurebetItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SurebetItem message from the specified reader or buffer.
         * @function decode
         * @memberof surebet.SurebetItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {surebet.SurebetItem} SurebetItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SurebetItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.surebet.SurebetItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.typesurebet = reader.string();
                    break;
                case 2:
                    message.arbprofit = reader.string();
                    break;
                case 3:
                    message.middle = reader.string();
                    break;
                case 4:
                    message.sportname = reader.string();
                    break;
                case 5:
                    message.fulltime = reader.string();
                    break;
                case 6:
                    message.arbgenerationtime = reader.string();
                    break;
                case 7:
                    message.bookmaker = reader.string();
                    break;
                case 8:
                    message.currentscore = reader.string();
                    break;
                case 9:
                    message.eventname = reader.string();
                    break;
                case 10:
                    message.eventstarttime = reader.string();
                    break;
                case 11:
                    message.leaguename = reader.string();
                    break;
                case 12:
                    message.arboutcome = reader.string();
                    break;
                case 13:
                    message.directionodd = reader.string();
                    break;
                case 14:
                    message.odd = reader.string();
                    break;
                case 15:
                    message.gamescore = reader.string();
                    break;
                case 16:
                    message.currencyodd = reader.string();
                    break;
                case 17:
                    message.created = reader.string();
                    break;
                case 18:
                    message.createddate = reader.string();
                    break;
                case 19:
                    message.arbid = reader.string();
                    break;
                case 20:
                    message.eventid = reader.string();
                    break;
                case 21:
                    message.section = reader.string();
                    break;
                case 22:
                    message.color = reader.string();
                    break;
                case 23:
                    message.wrongitem = reader.string();
                    break;
                case 24:
                    message.clon = reader.string();
                    break;
                case 25:
                    message.origen = reader.string();
                    break;
                case 26:
                    message.tipo = reader.string();
                    break;
                case 27:
                    message.link = reader.string();
                    break;
                case 28:
                    message.funds = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SurebetItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof surebet.SurebetItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {surebet.SurebetItem} SurebetItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SurebetItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SurebetItem message.
         * @function verify
         * @memberof surebet.SurebetItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SurebetItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.typesurebet != null && message.hasOwnProperty("typesurebet"))
                if (!$util.isString(message.typesurebet))
                    return "typesurebet: string expected";
            if (message.arbprofit != null && message.hasOwnProperty("arbprofit"))
                if (!$util.isString(message.arbprofit))
                    return "arbprofit: string expected";
            if (message.middle != null && message.hasOwnProperty("middle"))
                if (!$util.isString(message.middle))
                    return "middle: string expected";
            if (message.sportname != null && message.hasOwnProperty("sportname"))
                if (!$util.isString(message.sportname))
                    return "sportname: string expected";
            if (message.fulltime != null && message.hasOwnProperty("fulltime"))
                if (!$util.isString(message.fulltime))
                    return "fulltime: string expected";
            if (message.arbgenerationtime != null && message.hasOwnProperty("arbgenerationtime"))
                if (!$util.isString(message.arbgenerationtime))
                    return "arbgenerationtime: string expected";
            if (message.bookmaker != null && message.hasOwnProperty("bookmaker"))
                if (!$util.isString(message.bookmaker))
                    return "bookmaker: string expected";
            if (message.currentscore != null && message.hasOwnProperty("currentscore"))
                if (!$util.isString(message.currentscore))
                    return "currentscore: string expected";
            if (message.eventname != null && message.hasOwnProperty("eventname"))
                if (!$util.isString(message.eventname))
                    return "eventname: string expected";
            if (message.eventstarttime != null && message.hasOwnProperty("eventstarttime"))
                if (!$util.isString(message.eventstarttime))
                    return "eventstarttime: string expected";
            if (message.leaguename != null && message.hasOwnProperty("leaguename"))
                if (!$util.isString(message.leaguename))
                    return "leaguename: string expected";
            if (message.arboutcome != null && message.hasOwnProperty("arboutcome"))
                if (!$util.isString(message.arboutcome))
                    return "arboutcome: string expected";
            if (message.directionodd != null && message.hasOwnProperty("directionodd"))
                if (!$util.isString(message.directionodd))
                    return "directionodd: string expected";
            if (message.odd != null && message.hasOwnProperty("odd"))
                if (!$util.isString(message.odd))
                    return "odd: string expected";
            if (message.gamescore != null && message.hasOwnProperty("gamescore"))
                if (!$util.isString(message.gamescore))
                    return "gamescore: string expected";
            if (message.currencyodd != null && message.hasOwnProperty("currencyodd"))
                if (!$util.isString(message.currencyodd))
                    return "currencyodd: string expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isString(message.created))
                    return "created: string expected";
            if (message.createddate != null && message.hasOwnProperty("createddate"))
                if (!$util.isString(message.createddate))
                    return "createddate: string expected";
            if (message.arbid != null && message.hasOwnProperty("arbid"))
                if (!$util.isString(message.arbid))
                    return "arbid: string expected";
            if (message.eventid != null && message.hasOwnProperty("eventid"))
                if (!$util.isString(message.eventid))
                    return "eventid: string expected";
            if (message.section != null && message.hasOwnProperty("section"))
                if (!$util.isString(message.section))
                    return "section: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            if (message.wrongitem != null && message.hasOwnProperty("wrongitem"))
                if (!$util.isString(message.wrongitem))
                    return "wrongitem: string expected";
            if (message.clon != null && message.hasOwnProperty("clon"))
                if (!$util.isString(message.clon))
                    return "clon: string expected";
            if (message.origen != null && message.hasOwnProperty("origen"))
                if (!$util.isString(message.origen))
                    return "origen: string expected";
            if (message.tipo != null && message.hasOwnProperty("tipo"))
                if (!$util.isString(message.tipo))
                    return "tipo: string expected";
            if (message.link != null && message.hasOwnProperty("link"))
                if (!$util.isString(message.link))
                    return "link: string expected";
            if (message.funds != null && message.hasOwnProperty("funds"))
                if (!$util.isString(message.funds))
                    return "funds: string expected";
            return null;
        };

        /**
         * Creates a SurebetItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof surebet.SurebetItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {surebet.SurebetItem} SurebetItem
         */
        SurebetItem.fromObject = function fromObject(object) {
            if (object instanceof $root.surebet.SurebetItem)
                return object;
            let message = new $root.surebet.SurebetItem();
            if (object.typesurebet != null)
                message.typesurebet = String(object.typesurebet);
            if (object.arbprofit != null)
                message.arbprofit = String(object.arbprofit);
            if (object.middle != null)
                message.middle = String(object.middle);
            if (object.sportname != null)
                message.sportname = String(object.sportname);
            if (object.fulltime != null)
                message.fulltime = String(object.fulltime);
            if (object.arbgenerationtime != null)
                message.arbgenerationtime = String(object.arbgenerationtime);
            if (object.bookmaker != null)
                message.bookmaker = String(object.bookmaker);
            if (object.currentscore != null)
                message.currentscore = String(object.currentscore);
            if (object.eventname != null)
                message.eventname = String(object.eventname);
            if (object.eventstarttime != null)
                message.eventstarttime = String(object.eventstarttime);
            if (object.leaguename != null)
                message.leaguename = String(object.leaguename);
            if (object.arboutcome != null)
                message.arboutcome = String(object.arboutcome);
            if (object.directionodd != null)
                message.directionodd = String(object.directionodd);
            if (object.odd != null)
                message.odd = String(object.odd);
            if (object.gamescore != null)
                message.gamescore = String(object.gamescore);
            if (object.currencyodd != null)
                message.currencyodd = String(object.currencyodd);
            if (object.created != null)
                message.created = String(object.created);
            if (object.createddate != null)
                message.createddate = String(object.createddate);
            if (object.arbid != null)
                message.arbid = String(object.arbid);
            if (object.eventid != null)
                message.eventid = String(object.eventid);
            if (object.section != null)
                message.section = String(object.section);
            if (object.color != null)
                message.color = String(object.color);
            if (object.wrongitem != null)
                message.wrongitem = String(object.wrongitem);
            if (object.clon != null)
                message.clon = String(object.clon);
            if (object.origen != null)
                message.origen = String(object.origen);
            if (object.tipo != null)
                message.tipo = String(object.tipo);
            if (object.link != null)
                message.link = String(object.link);
            if (object.funds != null)
                message.funds = String(object.funds);
            return message;
        };

        /**
         * Creates a plain object from a SurebetItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof surebet.SurebetItem
         * @static
         * @param {surebet.SurebetItem} message SurebetItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SurebetItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.typesurebet = "";
                object.arbprofit = "";
                object.middle = "";
                object.sportname = "";
                object.fulltime = "";
                object.arbgenerationtime = "";
                object.bookmaker = "";
                object.currentscore = "";
                object.eventname = "";
                object.eventstarttime = "";
                object.leaguename = "";
                object.arboutcome = "";
                object.directionodd = "";
                object.odd = "";
                object.gamescore = "";
                object.currencyodd = "";
                object.created = "";
                object.createddate = "";
                object.arbid = "";
                object.eventid = "";
                object.section = "";
                object.color = "";
                object.wrongitem = "";
                object.clon = "";
                object.origen = "";
                object.tipo = "";
                object.link = "";
                object.funds = "";
            }
            if (message.typesurebet != null && message.hasOwnProperty("typesurebet"))
                object.typesurebet = message.typesurebet;
            if (message.arbprofit != null && message.hasOwnProperty("arbprofit"))
                object.arbprofit = message.arbprofit;
            if (message.middle != null && message.hasOwnProperty("middle"))
                object.middle = message.middle;
            if (message.sportname != null && message.hasOwnProperty("sportname"))
                object.sportname = message.sportname;
            if (message.fulltime != null && message.hasOwnProperty("fulltime"))
                object.fulltime = message.fulltime;
            if (message.arbgenerationtime != null && message.hasOwnProperty("arbgenerationtime"))
                object.arbgenerationtime = message.arbgenerationtime;
            if (message.bookmaker != null && message.hasOwnProperty("bookmaker"))
                object.bookmaker = message.bookmaker;
            if (message.currentscore != null && message.hasOwnProperty("currentscore"))
                object.currentscore = message.currentscore;
            if (message.eventname != null && message.hasOwnProperty("eventname"))
                object.eventname = message.eventname;
            if (message.eventstarttime != null && message.hasOwnProperty("eventstarttime"))
                object.eventstarttime = message.eventstarttime;
            if (message.leaguename != null && message.hasOwnProperty("leaguename"))
                object.leaguename = message.leaguename;
            if (message.arboutcome != null && message.hasOwnProperty("arboutcome"))
                object.arboutcome = message.arboutcome;
            if (message.directionodd != null && message.hasOwnProperty("directionodd"))
                object.directionodd = message.directionodd;
            if (message.odd != null && message.hasOwnProperty("odd"))
                object.odd = message.odd;
            if (message.gamescore != null && message.hasOwnProperty("gamescore"))
                object.gamescore = message.gamescore;
            if (message.currencyodd != null && message.hasOwnProperty("currencyodd"))
                object.currencyodd = message.currencyodd;
            if (message.created != null && message.hasOwnProperty("created"))
                object.created = message.created;
            if (message.createddate != null && message.hasOwnProperty("createddate"))
                object.createddate = message.createddate;
            if (message.arbid != null && message.hasOwnProperty("arbid"))
                object.arbid = message.arbid;
            if (message.eventid != null && message.hasOwnProperty("eventid"))
                object.eventid = message.eventid;
            if (message.section != null && message.hasOwnProperty("section"))
                object.section = message.section;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.wrongitem != null && message.hasOwnProperty("wrongitem"))
                object.wrongitem = message.wrongitem;
            if (message.clon != null && message.hasOwnProperty("clon"))
                object.clon = message.clon;
            if (message.origen != null && message.hasOwnProperty("origen"))
                object.origen = message.origen;
            if (message.tipo != null && message.hasOwnProperty("tipo"))
                object.tipo = message.tipo;
            if (message.link != null && message.hasOwnProperty("link"))
                object.link = message.link;
            if (message.funds != null && message.hasOwnProperty("funds"))
                object.funds = message.funds;
            return object;
        };

        /**
         * Converts this SurebetItem to JSON.
         * @function toJSON
         * @memberof surebet.SurebetItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SurebetItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SurebetItem;
    })();

    surebet.SurebetList = (function() {

        /**
         * Properties of a SurebetList.
         * @memberof surebet
         * @interface ISurebetList
         * @property {Array.<surebet.ISurebetItem>|null} [items] SurebetList items
         * @property {number|null} [totalcount] SurebetList totalcount
         */

        /**
         * Constructs a new SurebetList.
         * @memberof surebet
         * @classdesc Represents a SurebetList.
         * @implements ISurebetList
         * @constructor
         * @param {surebet.ISurebetList=} [properties] Properties to set
         */
        function SurebetList(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SurebetList items.
         * @member {Array.<surebet.ISurebetItem>} items
         * @memberof surebet.SurebetList
         * @instance
         */
        SurebetList.prototype.items = $util.emptyArray;

        /**
         * SurebetList totalcount.
         * @member {number} totalcount
         * @memberof surebet.SurebetList
         * @instance
         */
        SurebetList.prototype.totalcount = 0;

        /**
         * Creates a new SurebetList instance using the specified properties.
         * @function create
         * @memberof surebet.SurebetList
         * @static
         * @param {surebet.ISurebetList=} [properties] Properties to set
         * @returns {surebet.SurebetList} SurebetList instance
         */
        SurebetList.create = function create(properties) {
            return new SurebetList(properties);
        };

        /**
         * Encodes the specified SurebetList message. Does not implicitly {@link surebet.SurebetList.verify|verify} messages.
         * @function encode
         * @memberof surebet.SurebetList
         * @static
         * @param {surebet.ISurebetList} message SurebetList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SurebetList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.surebet.SurebetItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.totalcount != null && Object.hasOwnProperty.call(message, "totalcount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalcount);
            return writer;
        };

        /**
         * Encodes the specified SurebetList message, length delimited. Does not implicitly {@link surebet.SurebetList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof surebet.SurebetList
         * @static
         * @param {surebet.ISurebetList} message SurebetList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SurebetList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SurebetList message from the specified reader or buffer.
         * @function decode
         * @memberof surebet.SurebetList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {surebet.SurebetList} SurebetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SurebetList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.surebet.SurebetList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.surebet.SurebetItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalcount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SurebetList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof surebet.SurebetList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {surebet.SurebetList} SurebetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SurebetList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SurebetList message.
         * @function verify
         * @memberof surebet.SurebetList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SurebetList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.surebet.SurebetItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.totalcount != null && message.hasOwnProperty("totalcount"))
                if (!$util.isInteger(message.totalcount))
                    return "totalcount: integer expected";
            return null;
        };

        /**
         * Creates a SurebetList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof surebet.SurebetList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {surebet.SurebetList} SurebetList
         */
        SurebetList.fromObject = function fromObject(object) {
            if (object instanceof $root.surebet.SurebetList)
                return object;
            let message = new $root.surebet.SurebetList();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".surebet.SurebetList.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".surebet.SurebetList.items: object expected");
                    message.items[i] = $root.surebet.SurebetItem.fromObject(object.items[i]);
                }
            }
            if (object.totalcount != null)
                message.totalcount = object.totalcount | 0;
            return message;
        };

        /**
         * Creates a plain object from a SurebetList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof surebet.SurebetList
         * @static
         * @param {surebet.SurebetList} message SurebetList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SurebetList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (options.defaults)
                object.totalcount = 0;
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.surebet.SurebetItem.toObject(message.items[j], options);
            }
            if (message.totalcount != null && message.hasOwnProperty("totalcount"))
                object.totalcount = message.totalcount;
            return object;
        };

        /**
         * Converts this SurebetList to JSON.
         * @function toJSON
         * @memberof surebet.SurebetList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SurebetList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SurebetList;
    })();

    return surebet;
})();

export { $root as default };
